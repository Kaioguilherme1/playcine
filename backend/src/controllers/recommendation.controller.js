import tokenMiddleware from "../middlewares/token.middleware.js";
import responseHandler from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js";
import favoriteModel from "../models/favorite.model.js";
import userModel from "../models/user.model.js";

const getRecommendations = async (req, res) => {
  try {
    const tokenDecoded = tokenMiddleware.tokenDecode(req);
    if (!tokenDecoded) {
      return responseHandler.unauthorize(res);
    }

    const user = await userModel.findById(tokenDecoded.data);
    if (!user) {
      return responseHandler.unauthorize(res);
    }

    const favorites = await favoriteModel.find({ user: user.id });
    const favoriteIds = new Set(favorites.map(favorite => favorite.mediaId));

    const recommendationsSet = new Set();

    for (const favorite of favorites) {
      try {
        const recommendation = await tmdbApi.mediaRecommend({ mediaType: favorite.mediaType, mediaId: favorite.mediaId });
        recommendation.results.forEach(rec => {
          if (!favoriteIds.has(rec.id)) {
            recommendationsSet.add(JSON.stringify(rec));
          }
        });
      } catch (error) {
        // Handle error if needed
      }
    }

    const uniqueRecommendations = Array.from(recommendationsSet).map(rec => JSON.parse(rec));

    responseHandler.ok(res, uniqueRecommendations);
  } catch (error) {
    responseHandler.error(res);
  }
};

export default { getRecommendations };
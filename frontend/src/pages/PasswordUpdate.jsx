import { LoadingButton } from "@mui/lab";
import { Box, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Container from "../components/common/Container";
import uiConfigs from "../configs/ui.configs";
import { useState } from "react";
import userApi from "../api/modules/user.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { setAuthModalOpen } from "../redux/features/authModalSlice";

const PasswordUpdate = () => {
  const [onRequest, setOnRequest] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: ""
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Senha deve ter no mínimo 8 caracteres")
        .required("Senha é obrigatória"),
      newPassword: Yup.string()
        .min(8, "Nova senha deve ter no mínimo 8 caracteres")
        .required("Nova senha é obrigatória"),
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Confirmação de senha não corresponde")
        .min(8, "Confirmação de senha deve ter no mínimo 8 caracteres")
        .required("Confirmação de senha é obrigatória")
    }),
    onSubmit: async values => onUpdate(values)
  });

  const onUpdate = async (values) => {
    if (onRequest) return;
    setOnRequest(true);

    const { response, err } = await userApi.passwordUpdate(values);

    setOnRequest(false);

    if (err) toast.error(err.message);
    if (response) {
      form.resetForm();
      navigate("/");
      dispatch(setUser(null));
      dispatch(setAuthModalOpen(true));
      toast.success("Senha atualizada com sucesso! Por favor, faça login novamente");
    }
  };

  return (
    <Box sx={{ ...uiConfigs.style.mainContent }}>
      <Container header="Atualizar senha">
        <Box component="form" maxWidth="400px" onSubmit={form.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              type="password"
              placeholder="Senha atual"
              name="password"
              fullWidth
              value={form.values.password}
              onChange={form.handleChange}
              color="primary"
              error={form.touched.password && form.errors.password !== undefined}
              helperText={form.touched.password && form.errors.password}
            />
            <TextField
              type="password"
              placeholder="Nova senha"
              name="newPassword"
              fullWidth
              value={form.values.newPassword}
              onChange={form.handleChange}
              color="primary"
              error={form.touched.newPassword && form.errors.newPassword !== undefined}
              helperText={form.touched.newPassword && form.errors.newPassword}
            />
            <TextField
              type="password"
              placeholder="Confirmar nova senha"
              name="confirmNewPassword"
              fullWidth
              value={form.values.confirmNewPassword}
              onChange={form.handleChange}
              color="primary"
              error={form.touched.confirmNewPassword && form.errors.confirmNewPassword !== undefined}
              helperText={form.touched.confirmNewPassword && form.errors.confirmNewPassword}
            />

            <LoadingButton
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 4, backgroundColor: "blue", color: "white" }}
              loading={onRequest}
            >
              Atualizar senha
            </LoadingButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default PasswordUpdate;
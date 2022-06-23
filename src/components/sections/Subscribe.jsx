import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mui/system";

const email = yup
  .object()
  .shape({ email: yup.string().email("Please enter a valid email").required("Email is required") });

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(email), mode: "onSubmit" });

  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <Stack
      sx={{ background: "linear-gradient(to right , #265B5C , #11206B)", py: "64px", mt: "94px", gap: 3 }}
      justifyContent="center"
      alignItems="center">
      <Typography variant="h2" sx={{ color: "common.white" }}>
        Subscribe to Hatom newsletter
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#C4D3EA", borderRadius: "12px", fontSize: "2rem" }}>
        Subscribe to our newsletter and stay updated on the latest developments.
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(submitHandler)}
        id="newsletter-form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {errors && (
          <Typography variant="subittle2" sx={{ color: "red", fontSize: "1.1rem", mb: 1, ml: 1 }}>
            {errors.email?.message}
          </Typography>
        )}
        <TextField
          {...register("email")}
          variant="outlined"
          placeholder="Enter your email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ margin: 0, display: { xs: "none", md: "inherit" } }}>
                <PrimaryButton
                  sx={{ borderRadius: "12px", px: "36px", py: "16px" }}
                  type="submit"
                  form="newsletter-form">
                  Subscribe
                </PrimaryButton>
              </InputAdornment>
            ),
            sx: { color: "#C4D3EA", padding: "6px !important" },
          }}
          sx={{
            background: "#315B82",
            borderRadius: "12px",
            width: { lg: "50%", xs: "80%" },
            // width: "600px",
            padding: "0 !important",
            "& .MuiOutlinedInput-root": {
              // border: "0px !important",
              borderRadius: "12px",
            },
          }}
        />
        <PrimaryButton
          type="submit"
          form="newsletter-form"
          sx={{ borderRadius: "12px", px: "36px", py: "16px", mt: 3, display: { xs: "block", md: "none" } }}>
          Subscribe
        </PrimaryButton>
      </Box>
    </Stack>
  );
};

export default Subscribe;

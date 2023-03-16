import React from "react";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddressDto, AddressResponseDto } from "../../../Types/AddressTypes";
import { useStateContext } from "../../../StateContext";
import { createAddress } from "../../../Services/AddressService";

const AddressForm = ({
  addresses,
  setAddresses,
}: {
  addresses: Array<AddressResponseDto>;
  setAddresses: React.Dispatch<React.SetStateAction<AddressResponseDto[]>>;
}) => {
  const { user } = useStateContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddressDto>();

  const onSubmit = handleSubmit((data, e) => {
    data.userId = user.id;
    console.log(data);
    createAddress(data).then((res) => {
      if (res.status == 201) {
        reset();
        setAddresses([res.data, ...addresses]);
      }
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            p: 1,
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            flex: " 1 0 21%",
            boxSizing: "border-box",
            gap: 3,
            m: 2,
          }}
        >
          <TextField
            type="text"
            label="Address Name"
            {...register("addressName", {
              required: "Address name is required",
            })}
            error={Boolean(errors.addressName)}
            helperText={errors.addressName?.message}
          />
          <TextField
            type="text"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber?.message}
            label="Phone Number"
          />
          <TextField
            type="text"
            {...register("country", {
              required: "Country is required",
            })}
            error={Boolean(errors.country)}
            helperText={errors.country?.message}
            label="Country"
          />
          <TextField
            type="text"
            {...register("city", {
              required: "City is required",
            })}
            error={Boolean(errors.city)}
            helperText={errors.city?.message}
            label="City"
          />
          <TextField
            type="text"
            {...register("firstName", {
              required: "First name is required",
            })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
            label="First Name"
          />
          <TextField
            type="text"
            {...register("lastName", {
              required: "Last name is required",
            })}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
            label="Last Name"
          />
          <TextField
            type="text"
            {...register("fullAddress", {
              required: "Full Address is required",
            })}
            error={Boolean(errors.fullAddress)}
            helperText={errors.fullAddress?.message}
            label="Full Address"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              height: 50,
            }}
          >
            Create Address
          </Button>
        </Box>
      </Box>
    </form>
  );
};
export default AddressForm;

import { useForm } from "react-hook-form";
import React from "react";
import { FormBuilder } from "../../../libs/formBuilder";
import { userFormSchema } from "./schema";

export const UserInfo = (props) => {
  const { onSubmit, userInfo } = props;

  const dropdownOptions = {
    ROLES: [
      {
        label: "admin",
        value: "admin",
      },
      {
        label: "moderator",
        value: "moderator",
      },
    ],
  };

  return (
    <FormBuilder
      schema={userFormSchema}
      formData={userInfo}
      onSubmit={onSubmit}
      dropdownOptions={dropdownOptions}
    />
  );
};

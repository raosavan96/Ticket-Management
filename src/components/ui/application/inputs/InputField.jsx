import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const InputField = ({
  control,
  name,
  label,
  isRequire = false,
  type = "text",
  placeholder,
  style,
  mainStyle=''
}) => {
  return (
    <div className={style}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className={`text-base`}>
              {label} {isRequire && <span className="text-[red]">*</span>}
            </FormLabel>
            <FormControl>
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                className={mainStyle}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputField;

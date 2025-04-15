import { useForm } from "react-hook-form";
import { Row, Col, Input, InputNumber, Select, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { useEffect, useMemo, useRef } from "react";

const formData = {};

export const FormBuilder = (props) => {
  const { schema, onSubmit, dropdownOptions, formData = {} } = props;
  // console.log("props: ", props);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    resetField,
    setError,
    setValue,
    getValues,
  } = useForm({
    defaultValues:  useMemo(() => {
      return formData;
  }, [props]),
  });
  // const onSubmit = (data) => console.log(data);

  useEffect(() => {
    reset(formData);
}, [formData]);

  return (
    <div>
      <form
        className={styles.formBuilderContainer}
        // defaultValue={formData}
      >
        <Row gutter={[16, 16]}>
          {(schema?.fields || []).map((field) => {
            const {
              type,
              name,
              id,
              label,
              customerClassName,
              customStyle,
              colSpan,
              placeholder,
              defaultValue,
              ...rest
            } = field;
            register(name, { value: formData && formData[id]});
            const ref = useRef();
            switch (type) {
              case "input": {
                return (
                  <Col span={colSpan} key={id}>
                    {label}
                    <Input
                      className={`${styles.input} ${customerClassName}`}
                      id={id}
                      style={customStyle}
                      placeholder={placeholder || "input"}
                      defaultValue={formData && formData[id]}
                      onChange={(event) => {
                        setValue(id, event?.currentTarget?.value)
                      }}
                      {...rest}
                      
                    />
                  </Col>
                );
              }
              case "number": {
                const { addonBeforeValue, addonAfterValue } = field;
                return (
                  <Col span={colSpan} key={id}>
                    {label}
                    <br />
                    <InputNumber
                      className={`${styles.input} ${customerClassName}`}
                      id={id}
                      style={{ width: "100%", ...customStyle }}
                      placeholder={placeholder || "input number"}
                      defaultValue={formData && formData[id]}
                      onChange={(value) => {
                        setValue(id, value)
                      }}
                      {...rest}
                      // addonBeforeValue={
                      //   addonBeforeValue && (
                      //     <Select style={{ width: 60 }}>
                      //       {(addonBeforeValue || []).map((opt) => {
                      //         <Select.Option value={opt?.value}>
                      //           {opt?.label}
                      //         </Select.Option>;
                      //       })}
                      //     </Select>
                      //   )
                      // }
                    />
                  </Col>
                );
              }
              case "devider": {
                const {} = field;
                return (
                  <Col span={24} key={id}>
                    <Divider orientation="left">Left Text</Divider>
                  </Col>
                );
              }
              case "select": {
                const { optionsId } = field;
                return (
                  <Col span={colSpan} key={id}>
                    {label}
                    <br />
                    <Select
                      style={{ width: "100%" }}
                      onChange={(value) => {
                        setValue(id, value)
                      }}
                      defaultValue={formData && formData[id]}
                      options={dropdownOptions[optionsId] || []}
                    />
                  </Col>
                );
              }
            }
          })}
        </Row>
      </form>
      <div className="actionButtons">
        <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
      </div>
    </div>
  );
};

const Input = (props: any) => {
  const { formField } = props;
  console.log(formField);
  return (
    <>
      <div className="flex flex-col gap-[2px]">
        <p className="text-[16px] font-[600]">
          {formField?.label}
          {formField?.required ? "*" : ""}
        </p>
        <input
          placeholder={formField?.placeholder}
          style={formField?.style}
          className="border border-blue-950 rounded-md px-2 py-3"
          autoComplete="false"
        />
        <p className="text-[14px] font-[300]">{formField?.helpText}</p>
      </div>
    </>
  );
};

export default Input;

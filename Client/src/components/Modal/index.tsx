const Modal = (props: any) => {
  const { className } = props;

  return (
    <div className="bg-black h-screen w-screen top-0 left-0 z-40 fixed flex items-center justify-center opacity-80">
      <div className={className}>{props.children}</div>
    </div>
  );
};

export default Modal;

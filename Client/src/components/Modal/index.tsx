const Modal = (props: any) => {



  return (
    <div className="bg-black h-screen w-screen top-0 left-0 z-40 fixed flex items-center justify-center opacity-80">
      <div className="bg-white px-10 py-12 relative rounded-md">
        {props.children}
      </div>
    </div>
  )
}


export default Modal;
const Modal = (props) => {
  let tag;
  switch (props.flag) {
    case "minus":
      tag = <div>음수입니다</div>;
      break;
    case "input":
      tag = <div>입력해주세요</div>;
      break;
    default:
      tag = <div></div>;
  }
  return tag;
};

export default Modal;

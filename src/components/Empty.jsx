import css from "./Empty.module.css";
function Empty() {
  return (
    <div className={`${css["empty-div"]}`}>
      {" "}
      <h2 className="empty">Enjoy You Day!</h2>
      <p className="emptyPara">No TODOs Found!</p>
      <img src="../Todo_App/src/assets/TODOEMPTY.png" alt="¯\_(ツ)_/¯" />
    </div>
  );
}
export default Empty;

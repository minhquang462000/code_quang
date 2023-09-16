const physicsPoints=Number(prompt("Nhập điểm môn Vật lý của bạn"));
const chemistryPoints=Number(prompt("Nhập điểm môn Hoá học của bạn"));
const biologyPoints=Number(prompt("Nhập điểm môn Sinh học của bạn"));
const mediumScore= (physicsPoints+chemistryPoints+biologyPoints)/3;
document.write("điểm trung bình của bạn là" ,mediumScore);
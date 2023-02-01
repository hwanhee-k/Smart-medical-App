const RECEPTION_ORDER_LIST = ["접수대", "진료실", "진료실 앞 안내", "수납"];
const patientName = ["박세창", "신어진", "홍대기", "강성율"];
const PatientsDataArr = patientName.reduce((acc, cur, idx) => {
  console.log("acc : ", acc);
  console.log("cur : ", cur);
  console.log("acc[cur] : ", acc[cur]);
  acc[cur] = RECEPTION_ORDER_LIST;
  return acc;
}, []);
console.log(PatientsDataArr);

// ดาวโหลดไฟล์ที่ได้จาก api ลงเครื่อง
const data = {
    "status": true,
    "message": "Success",
    "type": "student",
    "username": "5701010101",
    "tu_status": "สำเร็จการศึกษา",
    "statusid": "40",
    "displayname_th": "นักศึกษา ทดสอบ",
    "displayname_en": "nuksuksa todsob",
    "email": "email.std@dome.tu.ac.th",
    "department": "สาขาวิชาการบริหารเทคโนโลยี",
    "faculty": "วิทยาลัยนงัตกรรม"
  };
  
  // สร้าง Blob จากข้อมูล JSON
  const jsonBlob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  
  // สร้าง URL สำหรับดาวน์โหลดไฟล์
  const link = document.createElement('a');
  link.href = URL.createObjectURL(jsonBlob);
  link.download = 'student_data.json'; // ตั้งชื่อไฟล์ที่จะดาวน์โหลด
  link.click(); // จำลองการคลิกลิงก์เพื่อดาวน์โหลด  หมายความว่าอัตโนมัต
  
import org.w3c.dom.*;
import javax.xml.parsers.*;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class XMLReader {
    public static void main(String[] args) {
        try {
            // Tạo đối tượng DocumentBuilderFactory và DocumentBuilder
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();

            // Phân tích tệp XML và trả về đối tượng Document
            Document document = builder.parse(new File("class.xml"));

            // Bình thường hóa tài liệu XML
            document.getDocumentElement().normalize();

            // Đọc ClassInfo
            NodeList classInfoList = document.getElementsByTagName("ClassInfo");
            Element classInfoElement = (Element) classInfoList.item(0);
            String className = classInfoElement.getElementsByTagName("ClassName").item(0).getTextContent();
            String classCode = classInfoElement.getElementsByTagName("ClassCode").item(0).getTextContent();
            String semester = classInfoElement.getElementsByTagName("Semester").item(0).getTextContent();
            ClassInfo classInfo = new ClassInfo(className, classCode, semester);

            // Đọc Instructor
            NodeList instructorList = document.getElementsByTagName("Instructor");
            Element instructorElement = (Element) instructorList.item(0);
            String instructorFirstName = instructorElement.getElementsByT4agName("FirstName").item(0).getTextContent();
            String instructorLastName = instructorElement.getElementsByTagName("LastName").item(0).getTextContent();
            String instructorEmail = instructorElement.getElementsByTagName("Email").item(0).getTextContent();
            String instructorOfficeHours = instructorElement.getElementsByTagName("OfficeHours").item(0).getTextContent();
            Instructor instructor = new Instructor(instructorFirstName, instructorLastName, instructorEmail, instructorOfficeHours);

            // Đọc Students
            NodeList studentList = document.getElementsByTagName("Student");
            List<Student> students = new ArrayList<>();
            for (int i = 0; i < studentList.getLength(); i++) {
                Element studentElement = (Element) studentList.item(i);
                int id = Integer.parseInt(studentElement.getElementsByTagName("ID").item(0).getTextContent());
                String studentFirstName = studentElement.getElementsByTagName("FirstName").item(0).getTextContent();
                String studentLastName = studentElement.getElementsByTagName("LastName").item(0).getTextContent();
                String studentEmail = studentElement.getElementsByTagName("Email").item(0).getTextContent();
                String major = studentElement.getElementsByTagName("Major").item(0).getTextContent();
                Student student = new Student(id, studentFirstName, studentLastName, studentEmail, major);
                students.add(student);
            }

            // Đọc Schedule
            NodeList scheduleList = document.getElementsByTagName("Schedule");
            List<Schedule> schedules = new ArrayList<>();
            for (int i = 0; i < scheduleList.getLength(); i++) {
                Element scheduleElement = (Element) scheduleList.item(i);
                String day = scheduleElement.getElementsByTagName("Day").item(0).getTextContent();
                String time = scheduleElement.getElementsByTagName("Time").item(0).getTextContent();
                String room = scheduleElement.getElementsByTagName("Room").item(0).getTextContent();
                Schedule schedule = new Schedule(day, time, room);
                schedules.add(schedule);
            }

            // Tạo đối tượng Class
            Class classObj = new Class(classInfo, instructor, students, schedules);

            // In thông tin lớp học
            System.out.println(classObj);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

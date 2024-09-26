// ClassInfo.java
public class ClassInfo {
    private String className;
    private String classCode;
    private String semester;

    // Constructor, getters, and setters
    public ClassInfo(String className, String classCode, String semester) {
        this.className = className;
        this.classCode = classCode;
        this.semester = semester;
    }

    // Getters and setters
    // toString method
}

// Instructor.java
public class Instructor {
    private String firstName;
    private String lastName;
    private String email;
    private String officeHours;

    // Constructor, getters, and setters
    public Instructor(String firstName, String lastName, String email, String officeHours) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.officeHours = officeHours;
    }

    // Getters and setters
    // toString method
}

// Student.java
public class Student {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String major;

    // Constructor, getters, and setters
    public Student(int id, String firstName, String lastName, String email, String major) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.major = major;
    }

    // Getters and setters
    // toString method
}

// Schedule.java
public class Schedule {
    private String day;
    private String time;
    private String room;

    // Constructor, getters, and setters
    public Schedule(String day, String time, String room) {
        this.day = day;
        this.time = time;
        this.room = room;
    }

    // Getters and setters
    // toString method
}

// Class.java
import java.util.List;

public class Class {
    private ClassInfo classInfo;
    private Instructor instructor;
    private List<Student> students;
    private List<Schedule> schedules;

    // Constructor, getters, and setters
    public Class(ClassInfo classInfo, Instructor instructor, List<Student> students, List<Schedule> schedules) {
        this.classInfo = classInfo;
        this.instructor = instructor;
        this.students = students;
        this.schedules = schedules;
    }

    // Getters and setters
    // toString method
}

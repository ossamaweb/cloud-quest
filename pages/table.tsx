// pages/lessons-table.tsx
import lessonsSeedData from "@/tools/amplify/seed-data/004_lessons.seed";
import { NextPage } from "next";

// Define the type for our lesson data
interface Lesson {
  moduleId: string;
  lessonOrder: number;
  title: string;
  content: string;
  type: string;
}

const LessonsTable: NextPage = () => {
  console.log(lessonsSeedData.filter((l) => l.type === "PRACTICE"));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lessons Table</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={tableHeaderStyle}>Module ID</th>
            <th style={tableHeaderStyle}>Lesson Order</th>
            <th style={tableHeaderStyle}>Title</th>
            <th style={tableHeaderStyle}>Content</th>
            <th style={tableHeaderStyle}>Type</th>
          </tr>
        </thead>
        <tbody>
          {lessonsSeedData.map((lesson, index) => (
            <tr
              key={index}
              style={{
                borderBottom: "1px solid #ddd",
              }}
            >
              <td style={tableCellStyle}>{lesson.moduleId}</td>
              <td style={tableCellStyle}>{lesson.order}</td>
              <td style={tableCellStyle}>{lesson.title}</td>
              <td style={tableCellStyle}>{lesson.content}</td>
              <td style={tableCellStyle}>{lesson.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles
const tableHeaderStyle = {
  padding: "12px",
  textAlign: "left" as const,
  borderBottom: "2px solid #ddd",
  backgroundColor: "#f4f4f4",
};

const tableCellStyle = {
  padding: "12px",
  textAlign: "left" as const,
};

export default LessonsTable;

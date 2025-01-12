import modulesSeedData from "@/tools/amplify/seed-data/003_modules.seed";
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
  // useEffect(() => {
  //   modulesSeedData.forEach((modData) => {
  //     const prompt = generateLessonsPrompt({
  //       moduleId: modData.id!,
  //       moduleTitle: modData.title,
  //       moduleDecription: modData.description ?? "",
  //     });

  //     console.log("**** PROMPT ****", modData.id!);
  //     console.log(prompt);
  //     console.log(`\n\n\n`);
  //   });
  // }, []);
  return (
    <div className="space-y-12 p-12">
      {modulesSeedData.map((moduleData) => {
        return (
          <div className="space-y-6" key={moduleData.id}>
            <h1 className="text-xl">{moduleData.title}</h1>
            <h2 className="text-yellow-300">{moduleData.id}</h2>
            <p>{moduleData.description}</p>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px",
              }}
            >
              <tbody>
                {lessonsSeedData
                  .filter((lesson) => lesson.moduleId === moduleData.id)
                  .map((lesson, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <td style={tableCellStyle}>{lesson.id}</td>
                      <td style={tableCellStyle}>{lesson.order}</td>
                      <td style={tableCellStyle}>{lesson.title}</td>
                      <td style={tableCellStyle}>
                        <div className="font-medium">{lesson.description}</div>
                        <div className="text-sm">{lesson.about}</div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        );
      })}
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

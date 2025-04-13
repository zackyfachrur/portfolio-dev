import { TimeLineProps } from "@/types/components";

export default function Timeline({
  company,
  timeline,
  jobTitle,
  description,
}: TimeLineProps) {
  return (
    <div className="border-2 rounded-2xl px-4 py-4 border-green-800 flex flex-col gap-2 bg-green-900">
      <ul>
        <li className="font-title text-xl">{company}</li>
        <li className="font-bold">{timeline}</li>
      </ul>
      <ul>
        <li className="font-bold">{jobTitle}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
}

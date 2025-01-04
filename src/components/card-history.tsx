import { FaBuilding } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { formatDate } from "@/utils/formatDate";

interface CardHistoryProps {
  title: string;
  company?: string;
  institution?: string;
  ubication?: string;
  startDate: string;
  endDate: string;
  typeWork?: string;
}

export default function CardHistory({
  title,
  company,
  institution,
  ubication,
  startDate,
  endDate,
  typeWork,
}: Readonly<CardHistoryProps>) {


  return (
    <div className="flex justify-between border-b border-light-content pb-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-dark-content">{title}</h3>
        <p className="text-light-content flex gap-1">
          <span className="flex items-center gap-1">
            <FaBuilding />
            {company || institution}
          </span>
          {ubication && (
            <span className="flex items-center gap-1">
              <IoLocationOutline />
              {ubication}
            </span>
          )}
        </p>
      </div>
      <div className="flex flex-col items-end gap-2">
        {typeWork && (
          <p className="rounded-2xl bg-button-success px-6 py-1 text-button-text text-center w-fit font-semibold text-sm">
            {typeWork}
          </p>
        )}
        <p className="text-light-content">
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
      </div>
    </div>
  );
}

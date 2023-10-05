'use client'
import { useAppSelector } from "@/store";
import { SimpleWidget } from "..";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counter.count);
  return (
    <div className="p-2 flex flex-wrap items-center justify-center">
      <SimpleWidget
        title={`${counter}`}
        subTitle="Productos agregados"
        label="Contador"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
      {/* <SimpleWidget /> */}
    </div>
  );
};

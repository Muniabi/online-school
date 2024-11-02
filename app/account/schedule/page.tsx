import React from "react";

interface Props {
    className?: string;
}

const SchedulePage: React.FC<Props> = ({ className }) => {
    return <div className={className}>Расписание</div>;
};

export default SchedulePage;

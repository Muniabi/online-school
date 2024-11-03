import React from "react";

interface Props {
    className?: string;
}

const HomeworksPage: React.FC<Props> = ({ className }) => {
    return (
        <div>
            <h1>Homeworks</h1>
        </div>
    );
};

export default HomeworksPage;

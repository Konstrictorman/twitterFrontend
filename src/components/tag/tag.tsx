import "./tag.css";

export interface TagProps {
	label: string;
}

const Tag = ({ label }: TagProps) => {
	return <div className="tag">{label}</div>;
};

export default Tag;

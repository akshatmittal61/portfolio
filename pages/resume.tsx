import React from "react";

const Resume: React.FC = () => <></>;

export default Resume;

export const getServerSideProps = async () => {
	return {
		redirect: {
			destination: "https://bit.ly/akshat_mittal",
			permanent: true,
		},
	};
};

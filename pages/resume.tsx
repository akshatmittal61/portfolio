import { resumeUrl } from "@/constants/variables";
import React from "react";

const Resume: React.FC = () => <></>;

export default Resume;

export const getServerSideProps = async () => {
	return {
		redirect: {
			destination: resumeUrl,
			permanent: true,
		},
	};
};

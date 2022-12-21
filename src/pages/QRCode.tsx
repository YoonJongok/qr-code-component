import QRCodeImg from "../assets/image-qr-code.png";

export const QRCode = () => {
	return (
		<div className="bgColor mx-auto flex h-screen w-full items-center justify-center px-6">
			<div className="flex w-[375px] flex-col items-center justify-between gap-5 rounded-xl bg-white px-4 py-6">
				<img
					src={QRCodeImg}
					alt="qr-code"
					className="aspect-square rounded-xl"
				/>
				<h1 className="text-center text-2xl font-bold">
					Improve your front-end skills by building projects
				</h1>
				<p className="px-6 pb-8 text-center text-paragraph text-qr-grayishBlue">
					Scan the QR code to visit Frontend Mentor and take your coding skills
					to the next level
				</p>
			</div>
		</div>
	);
};

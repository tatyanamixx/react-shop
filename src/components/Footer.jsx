function Footer() {
	return (
		<footer className='page-footer blue-grey lighten-4'>
			<div className='footer-copyright'>
				<div className='container'>
					© 2019 - {new Date().getFullYear()} Copyright
					<a
						className='grey-text text-lighten-4 right'
						href='https://github.com/tatyanamixx/react-shop.git'
						target='_blank'
						rel='noreferrer'>
						Repo
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

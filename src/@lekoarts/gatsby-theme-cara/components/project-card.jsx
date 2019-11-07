/** @jsx jsx */
import { FaGit, FaGlobe } from 'react-icons/fa';
import { jsx } from 'theme-ui';

const ProjectCard = ({ link, title, children, bg }) => {
	return (
		<div
			sx={{
				width: `100%`,
				boxShadow: `lg`,
				position: `relative`,
				textDecoration: `none`,
				borderRadius: `lg`,
				px: 4,
				py: [4, 5],
				color: `white`,
				background: bg || `none`,
				transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
				'&:hover': {
					color: `white !important`,
					transform: `translateY(-5px)`,
					boxShadow: `xl`
				}
			}}>
			<div
				sx={{
					textTransform: `uppercase`,
					letterSpacing: `wide`,
					pt: 4,
					fontSize: [4, 5],
					fontWeight: `medium`,
					lineHeight: 1,
					marginBottom: '5px'
				}}>
				{title}
			</div>
			<div sx={{ opacity: 0.75, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
				{children}
			</div>
			<div
				className='links'
				sx={{
					display: 'flex',
					justifyContent: 'space-evenly',
					textAlign: 'center'
				}}>
				{Object.keys(link).map((e, i) => (
					<a
						key={i}
						sx={{
							textTransform: 'capitalize',
							textDecoration: 'none',
							margin: '5px',
							color: 'white',
							border: '2px solid white',
							opacity: '0.8',
							padding: '10px 16px',
							borderRadius: '12px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							'&:hover': {
								backgroundColor: 'grey'
							}
						}}
						href={link[e]}
						target='_blank'
						rel='noreferrer noopener'>
						{e === 'code' ? (
							<FaGit sx={{ margin: '5px' }} />
						) : (
							<FaGlobe sx={{ margin: '5px' }} />
						)}{' '}
						{'  '}
						{e}
					</a>
				))}
			</div>
		</div>
	);
};
export default ProjectCard;

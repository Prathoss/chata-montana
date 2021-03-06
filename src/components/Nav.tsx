import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	Select,
	MenuItem,
} from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Flag from 'react-world-flags'

const useStyles = makeStyles({
	grow: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
		padding: '0 6px',
	},
	select: {
		paddingLeft: '12px',
	},
	flag: {
		width: '20px',
	},
})

const Nav = ({ styles, ...otherProps }: { styles: React.CSSProperties }) => {
	const classes = useStyles()
	const [t, i18n] = useTranslation()

	const langs = [
		{
			key: 'en',
			code: 'GB',
		},
		{
			key: 'cs',
			code: 'CZ',
		},
		{
			key: 'de',
			code: 'DE',
		},
		{
			key: 'pl',
			code: 'PL',
		},
	]

	return (
		<AppBar position="fixed" style={styles} {...otherProps}>
			<Toolbar>
				<Link to="/" className={classes.link}>
					<Typography variant="h1">Montana</Typography>
				</Link>
				<div className={classes.grow} />
				<Link to="/about" className={classes.link}>
					<Typography variant="h6">{t('about')}</Typography>
				</Link>
				<Link to="/contact" className={classes.link}>
					<Typography variant="h6">{t('contact')}</Typography>
				</Link>
				<Link to="/prices" className={classes.link}>
					<Typography variant="h6">{t('prices')}</Typography>
				</Link>
				<Select
					value={
						langs.find((l) => l.key === i18n.language)
							? i18n.language
							: i18n.options.fallbackLng
					}
					onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
						i18n.changeLanguage(e.target.value as string)
					}
					disableUnderline
					className={classes.select}
				>
					{langs.map((l) => (
						<MenuItem key={l.key} value={l.key}>
							<Flag code={l.code} className={classes.flag} />
						</MenuItem>
					))}
				</Select>
			</Toolbar>
		</AppBar>
	)
}

export default Nav

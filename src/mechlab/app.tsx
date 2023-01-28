import { render } from 'preact'

export function App(props) {
	return (
		<div className="appScreen">
			<h2>{props.title}</h2>
			{props.children}
		</div>
	)
}

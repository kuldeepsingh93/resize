import React from 'react';
import './layout.css';
class ResizeableComponent extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<div className = 'resizeable-component'> { children } </div>
		);	
	}
}
export default ResizeableComponent;
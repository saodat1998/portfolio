import React, { Component } from 'react';
import SkillBar from 'react-skillbars';
const SKILLS = [
	{
		type: 'React',
		level: 45,
	},
	{
		type: 'Vue',
		level: 55,
	},
	{
		type: 'Javascript',
		level: 75,
	},
	{
		type: 'Jquery',
		level: 80,
	},
	{
		type: 'Wordpress',
		level: 85,
	},
	{
		type: 'HTML',
		level: 90,
	},
	{
		type: 'Css',
		level: 87,
	},
];
const SKILLSAdd = [
	{
		type: 'JavaAndroid',
		level: 40,
	},
	{
		type: 'ReactNative',
		level: 60,
	},
	{
		type: 'Smarty',
		level: 78,
	},
	{
		type: 'Ajax',
		level: 80,
	},
	{
		type: 'Rest-api',
		level: 80,
	},
	{
		type: 'Version Control system',
		level: 60,
	},
	{
		type: 'Php',
		level: 80,
	},
];
const colors = {
	bar: '#3498db',
	title: {
		text: '#fff',
		background: '#2980b9',
	},
};
export default class Skills extends Component {
	render() {
		return (
			<div className="colorlib-narrow-content">
				<div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What are my skills?</span>
                <h2 className="colorlib-heading">Here are some of my skills</h2>
            </div>
            </div>
				<div className="row">
					<div
						className="col-md-6 animate-box"
						data-animate-effect="fadeInLeft"
					>
						<SkillBar skills={SKILLS} colors={colors}></SkillBar>
					</div>
                    <div
						className="col-md-6 animate-box"
						data-animate-effect="fadeInLeft"
					>
						<SkillBar skills={SKILLSAdd} colors={colors}></SkillBar>
					</div>
				</div>
			</div>
		);
	}
}

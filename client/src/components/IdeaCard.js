import React from 'react';

export default class IdeaCard extends React.Component {
  render() {
    return (
      <div className={`flex flex-col sm:flex-row border-2 border-gray-100 p-6 rounded-xl shadow-lg bg-gradient-to-r from-${this.props.color}-50 to-white`}>
        <div className="sm:mr-6 mb-4">
          <div className={`bg-${this.props.color}-100 h-24 w-24 flex justify-center items-center rounded-lg shadow-md`}>
            <i className={`${this.props.icon} text-${this.props.color}-500 text-5xl`}></i>
          </div>
        </div>
        <div>
          <h3 className="questrial text-3xl font-bold mb-2">{this.props.title}</h3>
          <p className="text-gray-700">
            {this.props.description}
          </p>
        </div>
      </div>
    )
  }
}

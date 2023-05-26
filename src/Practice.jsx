import React, { Component } from "react";

class Practice extends Component {
  // defining static array
  static whyReasons = [
    {
      id: 1,
      isChecked: false,
      value: "Check 1",
    },
    {
      id: 2,
      isChecked: false,
      value: "Check 2",
    },
    {
      id: 3,
      isChecked: false,
      value: "Check 3",
    },
    {
      id: 4,
      isChecked: false,
      value: "Check 4",
    },
  ];

  //   constructor
  constructor(props) {
    super(props);

    // states
    this.state = {
      // empty value array
      valueChecked: [],
    };

    // this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  //   checkbox change handler
  handleCheckChange = (e) => {
    const { value, checked } = e.target;
    const { valueChecked } = this.state;

    const updatedValues = checked
      ? [...valueChecked, value]
      : valueChecked.filter((v) => v !== value);

    this.setState({ valueChecked: updatedValues });
  };

  render() {
    const { valueChecked } = this.state;

    console.log(valueChecked);

    return (
      <div className="w-full h-screen bg-gray-900 flex justify-center items-center flex-wrap px-16">
        <div className="w-4/12">
          <h1 className="text-white text-5xl">Why Here</h1>
        </div>
        <div className="w-8/12">
          <ul>
            {Practice.whyReasons.map((i, index) => (
              <li className="my-4 p-2 bg-gray-200" key={`checkbox-${index}`}>
                <label htmlFor={`${i.id}`} className="flex items-center">
                  <span className="text-gray-800 mr-2">
                    {i.isChecked ? "✅" : "⬜"}
                  </span>
                  <input
                    type="checkbox"
                    value={i.value}
                    checked={valueChecked.includes(i.value)}
                    name={`checkbox-${index}`}
                    id={`${i.id}`}
                    onChange={this.handleCheckChange}
                    className="hidden"
                  />
                  {i.value}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Practice;

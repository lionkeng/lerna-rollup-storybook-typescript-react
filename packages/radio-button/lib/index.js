import React from 'react';

function RadioButton(props) {
    return (React.createElement("div", { className: "radio-button" },
        React.createElement("label", null,
            React.createElement("input", { type: "radio", name: props.name, value: props.value, checked: props.checked, onChange: props.onChange }),
            props.label)));
}

export { RadioButton as default };
//# sourceMappingURL=index.js.map

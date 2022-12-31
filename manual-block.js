wp.blocks.registerBlockType('praveendias1180/manual-block', {
    title: 'Manual Custom Block',
    icon: 'tickets',
    category: 'design',
    attributes: {
        companyName: {
            type: 'string'
        },
        companyPhone: {
            type: 'string'
        },
        companyAddress: {
            type: 'string'
        },
    },
    edit: function(props){
        function updateCompanyName(e){props.setAttributes({companyName: e.target.value})}
        function updateCompanyPhone(e){props.setAttributes({companyPhone: e.target.value})}
        function updateCompanyAddress(e){props.setAttributes({companyAddress: e.target.value})}

        return /*#__PURE__*/ React.createElement(
            "div",
            {
              id: "manual-block-div"
            },
            /*#__PURE__*/ React.createElement(
              "div",
              null,
              /*#__PURE__*/ React.createElement("label", null, "Company Name"),
              /*#__PURE__*/ React.createElement("input", {
                type: "text",
                value: props.attributes.companyName,
                onChange: updateCompanyName,
                placeholder: "Company name here..."
              })
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              null,
              /*#__PURE__*/ React.createElement("label", null, "Company Phone"),
              /*#__PURE__*/ React.createElement("input", {
                type: "text",
                value: props.attributes.companyPhone,
                onChange: updateCompanyPhone,
                placeholder: "Company phone here..."
              })
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              null,
              /*#__PURE__*/ React.createElement("label", null, "Company Address"),
              /*#__PURE__*/ React.createElement("input", {
                type: "text",
                value: props.attributes.companyAddress,
                onChange: updateCompanyAddress,
                placeholder: "Company address here..."
              })
            )
          );
    },
    save: function(props){
        return null;
    }
})
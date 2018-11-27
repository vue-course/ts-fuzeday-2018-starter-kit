export default {
    name: 'header',
  
    data() {
      return {
        headerStyles: {
          border: '1px solid red',
          borderRadius: 3,
          backgroundColor: '#FFFFFF',
          cursor: 'pointer',
          fontSize: 30,
          padding: '3px 10px',
          margin: 10,
        },
      };
    },
  
    template: `
      <div :style="buttonStyles" @click="onClick">
        <slot></slot>
      </div>
    `,
  };
  
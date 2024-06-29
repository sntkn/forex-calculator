import { style, globalStyle } from '@vanilla-extract/css'

globalStyle('#root', {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center',
})

export const card = style({
  padding: '2em',
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
})
export const title = style({
  marginTop: 0,
  fontSize: '1.5em',
  textAlign: 'center',
});

export const formGroup = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
});

export const label = style({
  flex: '6 1 0',
  paddingRight: '10px',
  fontWeight: 'bold',
  maxWidth: '70%',
  textAlign: 'right',
});

export const input = style({
  flex: '4 1 0',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxSizing: 'border-box',
});

export const resultContainer = style({
  marginTop: '20px',
});

export const resultTable = style({
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '10px',
});

export const resultRow = style({
  borderBottom: '1px solid #ddd',
});

export const resultCell = style({
  padding: '8px',
  textAlign: 'left',
});
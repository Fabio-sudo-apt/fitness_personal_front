import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    text: {
      primary: '#FFFFFF',
    },
    background: {
      paper: '#022213',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: '#000000',
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FFFFFF', // Cor do texto do botão
          backgroundColor: '#022213', // Cor de fundo do botão
          '&:hover': {
            backgroundColor: '#ADDE34', // Cor de fundo ao passar o mouse
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        colorPrimary: {
          color: '#ADDE34'
        },
        colorError: {
          color: '#FF0000'
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            color: '#FFFFFF', // Cor do texto no cabeçalho da tabela (branco)
            backgroundColor: '#022213', // Cor de fundo no cabeçalho (verde escuro)
            fontWeight: 'bold', // Negrito para cabeçalho
            padding: '12px', // Adiciona espaçamento interno ao cabeçalho
          },
        },
      },
    },
    
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#022213', // Cor do texto nas células da tabela (verde escuro)
          backgroundColor: '#FFFFFF', // Cor de fundo padrão das células (branco)
          padding: '12px', // Adiciona espaçamento interno
          borderBottom: '1px solid #000000', // Linha inferior preta
        },
      },
    },
    
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF', // Cor de fundo padrão das linhas da tabela (branco)
          '&:hover': {
            backgroundColor: '#ADDE34', // Cor de fundo ao passar o mouse
            color: '#FFFFFF', // Cor do texto ao passar o mouse (branco)
            transition: 'background-color 0.3s ease', // Transição suave
          },
        },
      },
    },
    
  },
});



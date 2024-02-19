import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";


import {
    experimental_extendTheme as materialExtendTheme,
    Experimental_CssVarsProvider as MaterialCssVarsProvider,
    THEME_ID as MATERIAL_THEME_ID,
  } from '@mui/material/styles';
  import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
  import CssBaseline from '@mui/material/CssBaseline';
  
  const materialTheme = materialExtendTheme({
    typography: {
      allVariants: {
        fontFamily: 'fontFamily.sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
        textTransform: 'none',
        fontSize: 16,
      },
    },    
  });


  // import { ThemeProvider, createTheme,   alpha, getContrastRatio, } from '@mui/material/styles';

// // Augment the palette to include a violet color
// declare module '@mui/material/styles' {
//     interface Palette {
//       violet: Palette['primary'];
//     }
  
//     interface PaletteOptions {
//       violet?: PaletteOptions['primary'];
//     }
// }
  
// // Update the Button's color options to include a violet option
// declare module '@mui/material/Button' {
//     interface ButtonPropsColorOverrides {
//         violet: true;
//     }
// }

// const violetBase = '#7F00FF';
// const violetMain = alpha(violetBase, 0.7);

// /* RESETEAR EL TEMA DE MATERIAL-UI PARA USAR LAS MISMAS FUENTES QUE TAILWIND */
// const theme = createTheme({
//     typography: {
//       allVariants: {
//         fontFamily: 'fontFamily.sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
//         textTransform: 'none',
//         fontSize: 16,
//       },
//     },
//     palette: {
//         violet: {
//           main: violetMain,
//           light: alpha(violetBase, 0.5),
//           dark: alpha(violetBase, 0.9),
//           contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
//         },
//     },
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
        // <ThemeProvider theme={theme}>
        //     <Layout>
        //         <Component {...pageProps} />
        //     </Layout>
        // </ThemeProvider>
        <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }} defaultMode="system">
        <JoyCssVarsProvider defaultMode="system">
          <CssBaseline enableColorScheme />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
        </JoyCssVarsProvider>
      </MaterialCssVarsProvider>        
    );
}

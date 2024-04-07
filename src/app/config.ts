import {
    getDefaultConfig,
  } from '@rainbow-me/rainbowkit';
  import {
    mainnet,
    sepolia
  } from 'wagmi/chains';
  
const  Config = getDefaultConfig({
    appName: 'test',
    projectId: '16293a1f5007277eebc791eff80f1dd8',
    chains: [mainnet, sepolia],
    ssr: true 
  });
  
  export default Config
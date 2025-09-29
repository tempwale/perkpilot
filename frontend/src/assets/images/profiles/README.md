# Profile SVG Images

This folder contains the profile SVG images used in the TrustIndicator component.

## Download Instructions:

Please download the following SVG images and save them in this folder:

1. **profile-1.svg**

   - URL: https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/5a88786a-fc1c-441b-b4d4-a3275732b4a5/figma%3Aasset/ec51f3e6c38c0a26dc111a5990b3fca30b5d0aa9.png

2. **profile-2.svg**

   - URL: https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/5a88786a-fc1c-441b-b4d4-a3275732b4a5/figma%3Aasset/89f5cd6f7542ea09061b5bfd8d033886981a8605.png

3. **profile-3.svg**
   - URL: https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/5a88786a-fc1c-441b-b4d4-a3275732b4a5/figma%3Aasset/e06d98f4e8efa5acc58182f096be057fa62de137.png

## PowerShell Download Commands:

```powershell
cd "frontend\src\assets\images\profiles"

Invoke-WebRequest -Uri "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/5a88786a-fc1c-441b-b4d4-a3275732b4a5/figma%3Aasset/ec51f3e6c38c0a26dc111a5990b3fca30b5d0aa9.png" -OutFile "profile-1.svg"

Invoke-WebRequest -Uri "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/5a88786a-fc1c-441b-b4d4-a3275732b4a5/figma%3Aasset/89f5cd6f7542ea09061b5bfd8d033886981a8605.png" -OutFile "profile-2.svg"

Invoke-WebRequest -Uri "https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/5a88786a-fc1c-441b-b4d4-a3275732b4a5/figma%3Aasset/e06d98f4e8efa5acc58182f096be057fa62de137.png" -OutFile "profile-3.svg"
```

Final folder structure:

```
frontend/src/assets/images/profiles/
├── profile-1.svg
├── profile-2.svg
├── profile-3.svg
└── README.md
```

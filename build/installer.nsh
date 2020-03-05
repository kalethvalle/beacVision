!macro preInit
	SetRegView 64
	WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\PROSOFT\ELECTRON"
	WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\PROSOFT\ELECTRON"
	SetRegView 32
	WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\PROSOFT\ELECTRON"
	WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\PROSOFT\ELECTRON"
!macroend
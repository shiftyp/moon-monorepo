# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.flyctl
    pkgs.yarn
    pkgs.yarn-bash-completion
    pkgs.docker
  ];
  # Sets environment variables in the workspace
  env = {};
  services = {
    docker = {
      enable = true;
    };
  };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "denoland.vscode-deno"
      "ms-azuretools.vscode-docker"
      "tamasfe.even-better-toml"
    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
    };
  };
}
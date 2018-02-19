
echo == set config.js for front-end
if [[ -z "$URL_BACKEND" ]]; then
  echo URL_BACKEND not set
  exit 1;
fi

echo export const URL_BACKEND = $URL_BACKEND > src/config.js
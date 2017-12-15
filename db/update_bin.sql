update bins
set name = $1,
price = $2,
image_url = $3

where shelf_id=$4 and bin_id=$5
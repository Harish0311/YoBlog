SELECT 
    cd.postId,
    IFNULL(u.name, cd.input) AS name,
    IFNULL(u.color, cd.color) AS color,
    cd.text
FROM
    card_data cd
        LEFT JOIN
    users u ON cd.userId = u.id;
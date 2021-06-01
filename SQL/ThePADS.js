/*SELECT CONCAT(name,concat('(', concat(substr(occupation,1,1),')'))) 
FROM occupations 
ORDER BY name;

SELECT CONCAT('There are a total of',concat(' ',concat(count(occupation),concat(' ',concat(lower(occupation),'s.'))))) as total 
FROM occupations
GROUP BY occupation 
ORDER BY total;
 */
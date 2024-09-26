<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <head>
                <title>Bookstore</title>
                <style>
                    table {
                        width: 50%;
                        border-collapse: collapse;
                    }
                    table, th, td {
                        border: 1px solid black;
                    }
                    th, td {
                        padding: 15px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h2>Bookstore</h2>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Year</th>
                    </tr>
                    <xsl:for-each select="publisher/book">
                        <tr>
                            <td><xsl:value-of select="Title"/></td>
                            <td><xsl:value-of select="Author"/></td>
                            <td><xsl:value-of select="Price"/></td>
                            <td><xsl:value-of select="Year"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
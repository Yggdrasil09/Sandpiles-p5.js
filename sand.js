var piles;

var i,j;

function setup()
{
    var canvas=createCanvas(600,600);
    background(0, 0, 0);
    canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
    piles=new Array(600);
    for(i=0;i<600;i++)
    {
        piles[i]=new Array(600);
    }
    for(i=0;i<600;i++)
    {
        for(j=0;j<600;j++)
        {
            piles[i][j]=0;
        }
    }
    piles[300][300]=1000000;
    //pixelDensity(1);
}

function draw()
{  
    loadPixels();
    for(i=0;i<20;i++)
    {
        topple();
        colorr();
    }
    updatePixels();
}

function topple()
{
    for(var i=1;i<600;i++)
    {
        for(var j=1;j<600;j++)
        {
            if(piles[i][j]>3)
            {
                piles[i][j]=piles[i][j]-4;
                piles[i+1][j]++;
                piles[i-1][j]++;
                piles[i][j+1]++;
                piles[i][j-1]++;
            }
        }
    }
}

function colorr()
{
    for(i=0;i<600;i++)
    {
        for(j=0;j<600;j++)
        {
            if(piles[i][j]==0)
            {
                pixels[(i+j*width)*4+0]=255;
                pixels[(i+j*width)*4+1]=0;
                pixels[(i+j*width)*4+2]=255;
            }
            else if(piles[i][j]==1)
            {
                pixels[(i+j*width)*4+0]=0;
                pixels[(i+j*width)*4+1]=255;
                pixels[(i+j*width)*4+2]=0;
            }
            else if(piles[i][j]==2)
            {
                pixels[(i+j*width)*4+0]=0;
                pixels[(i+j*width)*4+1]=0;
                pixels[(i+j*width)*4+2]=255;
            }
            else if(piles[i][j]==3)
            {
                pixels[(i+j*width)*4+0]=255;
                pixels[(i+j*width)*4+1]=0;
                pixels[(i+j*width)*4+2]=0;
            }
            else if(piles[i][j]>=4)
            {
                pixels[(i+j*width)*4+0]=255;
                pixels[(i+j*width)*4+1]=255;
                pixels[(i+j*width)*4+2]=255;
            }
        }
    }
}

var piles=new Array(600);

function setup()
{
    var canvas=createCanvas(600,600);
    background(0, 0, 0);
    canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
    for(var i=0;i<600;i++)
    {
        piles[i]=new Array(600);
    }
    piles[300][300]=600;
}

function draw()
{  
    topple();
    colorcheck();
}

function topple()
{
    for(var i=0;i<600;i++)
    {
        for(var j=0;j<600;j++)
        {
            console.log(i ,j ,piles[i][j]);
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

function colorcheck()
{
    fill(255);
    for(var i=0;i<600;i++)
    {
        for(var j=0;j<600;j++)
        {
            if(piles[i][j]==0)
            {
                fill(255,0,0);
                rect(i,j,5,5);
            }
            else if(piles[i][j]==1)
            {
                fill(0,255,0);
                rect(i,j,5,5);
            }
            else if(piles[i][j]==2)
            {
                fill(0,0,255);
                rect(i,j,5,5);
            }
            else if(piles[i][j]==3)
            {
                fill((255,0,255));
                rect(i,j,5,5);
            }
            else if(piles[i][j]>=4)
            {
                rect(i,j,5,5);
            }
        }
    }
}
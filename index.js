const { Telegraf } = require("telegraf");
let binarySearch = `
int binarySearch(int arr[], int l, int r, int x)
{
    while (l <= r) {
        int m = l + (r - l) / 2;
 
        // Check if x is present at mid
        if (arr[m] == x)
            return m;
 
        // If x greater, ignore left half
        if (arr[m] < x)
            l = m + 1;
 
        // If x is smaller, ignore right half
        else
            r = m - 1;
    }
 
    // If we reach here, then element was not present
    return -1;
}
`;
let linearSearch = `
int linearSearch(int arr[], int N, int x)
{
    for (int i = 0; i < N; i++)
        if (arr[i] == x)
            return i;
    return -1;
}
`;
const bot = new Telegraf("6553449639:AAHee5cmr59fc7yjxSbdRjbU5b3_a2-3Gyc");
bot.start((ctx) =>
  ctx.reply("Hi,you are using coding bot from Prashant Thapliyal")
);
bot.command("binarySearch", (ctx) => ctx.reply(binarySearch));
bot.command("linearSearch", (ctx) => ctx.reply(linearSearch));
bot.on("sticker", (ctx) => ctx.reply("♥"));
bot.launch();
